import Link from "next/link";
import Image from "next/image";
import { REQUISITES } from "@/lib/constants";

export const metadata = {
  title: "Политика конфиденциальности | ИП Ямщикова",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#003556]">
      {/* Header */}
      <header className="border-b border-[#5286AC]/20 bg-[#003556]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 relative">
              <Image src="/logo.svg" alt="Логотип" fill className="object-contain" />
            </div>
            <span className="text-[#E0EBFC] font-[700] text-sm tracking-widest uppercase">ЯМЩИК</span>
          </Link>
          <Link href="/" className="text-[#5286AC] hover:text-[#E0EBFC] text-sm font-[600] transition-colors">
            ← На главную
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-[800] text-[#E0EBFC] text-4xl mb-2">Политика конфиденциальности</h1>
        <p className="text-[#5286AC] text-sm mb-10">Последнее обновление: 1 января 2025 г.</p>

        <div className="space-y-8 text-[#E0EBFC]/70 text-base leading-relaxed">
          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">1. Общие положения</h2>
            <p>
              Настоящая политика конфиденциальности регулирует порядок обработки и использования
              персональных данных, которые {REQUISITES.name} (ИНН: {REQUISITES.inn}, ОГРНИП: {REQUISITES.ogrnip})
              получает от пользователей при использовании данного сайта.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">2. Собираемые данные</h2>
            <p className="mb-3">Мы собираем следующие персональные данные, предоставляемые вами добровольно:</p>
            <ul className="space-y-2 list-none">
              {["Имя и фамилия", "Номер телефона", "Адрес электронной почты", "Наименование компании", "Адрес объекта"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5286AC] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">3. Цели обработки данных</h2>
            <p>Собранные данные используются исключительно для:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Подготовки коммерческого предложения по вашему запросу",
                "Связи с вами для уточнения деталей заказа",
                "Заключения и исполнения договора на оказание услуг",
                "Направления информации об услугах (с вашего согласия)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5286AC] shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">4. Защита данных</h2>
            <p>
              Мы принимаем необходимые технические и организационные меры для защиты ваших данных
              от несанкционированного доступа, изменения, раскрытия или уничтожения.
              Данные не передаются третьим лицам без вашего согласия, за исключением случаев,
              предусмотренных законодательством Российской Федерации.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">5. Ваши права</h2>
            <p>Вы вправе в любое время:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Запросить информацию об обрабатываемых нами ваших данных",
                "Потребовать исправления неточных данных",
                "Отозвать согласие на обработку персональных данных",
                "Потребовать удаления ваших данных",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5286AC] shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">6. Контакты</h2>
            <p>
              По вопросам, связанным с обработкой персональных данных, обращайтесь по адресу:{" "}
              <a href="mailto:ip-yamsh@mail.ru" className="text-[#5286AC] hover:underline">ip-yamsh@mail.ru</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
