import Link from "next/link";
import Image from "next/image";
import { REQUISITES } from "@/lib/constants";

export const metadata = {
  title: "Условия использования | ИП Ямщикова",
};

const SECTION_STYLE: React.CSSProperties = {
  background: "rgba(0,26,50,0.45)",
  backdropFilter: "blur(28px)",
  WebkitBackdropFilter: "blur(28px)",
  border: "1px solid rgba(90,174,232,0.12)",
  borderRadius: "1.5rem",
  padding: "32px 36px",
};

const H2_STYLE: React.CSSProperties = {
  fontSize: "18px", fontWeight: 700,
  letterSpacing: "-0.01em", color: "#ddeeff",
  marginBottom: "14px",
};

const P_STYLE: React.CSSProperties = {
  fontSize: "15px", lineHeight: 1.75,
  color: "rgba(221,238,255,0.58)",
};

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#001e35" }}>
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "rgba(0,20,38,0.80)",
          backdropFilter: "blur(28px)",
          borderBottom: "1px solid rgba(90,174,232,0.10)",
        }}
      >
        <div
          className="max-w-4xl mx-auto px-6 flex items-center justify-between"
          style={{ height: "72px" }}
        >
          <Link href="/" className="flex items-center gap-3">
            <div style={{ width: 36, height: 36, position: "relative" }}>
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
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "13px", fontWeight: 600,
              color: "rgba(90,174,232,0.70)",
            }}
          >
            ← На главную
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6" style={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <div
          style={{
            fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.20em", textTransform: "uppercase",
            color: "rgba(90,174,232,0.60)", marginBottom: "14px",
            display: "flex", alignItems: "center", gap: "10px",
          }}
        >
          <span style={{ display: "block", width: 28, height: 1, background: "#5aaee8" }} />
          Юридические документы
        </div>

        <h1
          style={{
            fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05,
            color: "#ddeeff", marginBottom: "8px",
          }}
        >
          Условия использования сайта
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(90,174,232,0.55)", marginBottom: "48px" }}>
          Последнее обновление: 1 января 2025 г.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>1. Общие условия</h2>
            <p style={P_STYLE}>
              Использование данного сайта означает ваше согласие с настоящими условиями.
              Сайт принадлежит и управляется {REQUISITES.name} (ИНН: {REQUISITES.inn}).
              Если вы не согласны с условиями, пожалуйста, покиньте сайт.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>2. Использование контента</h2>
            <p style={P_STYLE}>
              Все материалы на данном сайте — тексты, изображения, логотипы — являются
              интеллектуальной собственностью {REQUISITES.name}. Копирование, распространение
              или использование материалов без письменного разрешения правообладателя запрещено.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>3. Точность информации</h2>
            <p style={P_STYLE}>
              Информация на сайте носит исключительно ознакомительный характер. Конкретные условия
              оказания услуг и ценообразование определяются индивидуально по итогам осмотра объекта
              и закрепляются в договоре. Мы оставляем за собой право вносить изменения в информацию
              на сайте без предварительного уведомления.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>4. Ответственность</h2>
            <p style={P_STYLE}>
              {REQUISITES.name} не несёт ответственности за любые прямые или косвенные убытки,
              возникшие в результате использования или невозможности использования данного сайта.
              Мы не гарантируем бесперебойную работу сайта и оставляем за собой право приостановить
              его работу для проведения технических работ.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>5. Применимое право</h2>
            <p style={P_STYLE}>
              Настоящие условия регулируются законодательством Российской Федерации. Все споры,
              возникающие в связи с использованием сайта, подлежат рассмотрению в судах по месту
              регистрации {REQUISITES.name}.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>6. Контакты</h2>
            <p style={P_STYLE}>
              По вопросам, связанным с использованием сайта, обращайтесь:{" "}
              <a
                href="mailto:ip-yamsh@mail.ru"
                style={{ color: "rgba(90,174,232,0.75)", textDecoration: "underline" }}
              >
                ip-yamsh@mail.ru
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
