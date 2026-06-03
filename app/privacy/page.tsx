import Link from "next/link";
import Image from "next/image";
import { REQUISITES } from "@/lib/constants";

export const metadata = {
  title: "Политика конфиденциальности | ИП Ямщикова",
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

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#001e35" }}>
      {/* Header */}
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
              transition: "color 0.2s",
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
          Политика конфиденциальности
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(90,174,232,0.55)", marginBottom: "48px" }}>
          Последнее обновление: 1 января 2025 г.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>1. Общие положения</h2>
            <p style={P_STYLE}>
              Настоящая политика конфиденциальности регулирует порядок обработки и использования
              персональных данных, которые {REQUISITES.name} (ИНН: {REQUISITES.inn},
              ОГРНИП: {REQUISITES.ogrnip}) получает от пользователей при использовании данного сайта.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>2. Собираемые данные</h2>
            <p style={{ ...P_STYLE, marginBottom: "12px" }}>
              Мы собираем следующие персональные данные, предоставляемые вами добровольно:
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Имя и фамилия",
                "Номер телефона",
                "Адрес электронной почты",
                "Наименование компании",
                "Адрес объекта",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#5aaee8", flexShrink: 0,
                    }}
                  />
                  <span style={P_STYLE}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>3. Цели обработки данных</h2>
            <p style={{ ...P_STYLE, marginBottom: "12px" }}>
              Собранные данные используются исключительно для:
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Подготовки коммерческого предложения по вашему запросу",
                "Связи с вами для уточнения деталей заказа",
                "Заключения и исполнения договора на оказание услуг",
                "Направления информации об услугах (с вашего согласия)",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#5aaee8", flexShrink: 0, marginTop: "8px",
                    }}
                  />
                  <span style={P_STYLE}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>4. Защита данных</h2>
            <p style={P_STYLE}>
              Мы принимаем необходимые технические и организационные меры для защиты ваших данных
              от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные не
              передаются третьим лицам без вашего согласия, за исключением случаев, предусмотренных
              законодательством Российской Федерации.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>5. Ваши права</h2>
            <p style={{ ...P_STYLE, marginBottom: "12px" }}>Вы вправе в любое время:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Запросить информацию об обрабатываемых нами ваших данных",
                "Потребовать исправления неточных данных",
                "Отозвать согласие на обработку персональных данных",
                "Потребовать удаления ваших данных",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#5aaee8", flexShrink: 0, marginTop: "8px",
                    }}
                  />
                  <span style={P_STYLE}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>6. Контакты</h2>
            <p style={P_STYLE}>
              По вопросам, связанным с обработкой персональных данных, обращайтесь:{" "}
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
