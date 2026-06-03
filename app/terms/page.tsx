import Link from "next/link";
import Image from "next/image";
import { REQUISITES } from "@/lib/constants";

export const metadata = {
  title: "Условия использования | ИП Ямщикова",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#003556]">
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
        <h1 className="font-[800] text-[#E0EBFC] text-4xl mb-2">Условия использования сайта</h1>
        <p className="text-[#5286AC] text-sm mb-10">Последнее обновление: 1 января 2025 г.</p>

        <div className="space-y-8 text-[#E0EBFC]/70 text-base leading-relaxed">
          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">1. Общие условия</h2>
            <p>
              Использование данного сайта означает ваше согласие с настоящими условиями.
              Сайт принадлежит и управляется {REQUISITES.name} (ИНН: {REQUISITES.inn}).
              Если вы не согласны с условиями, пожалуйста, покиньте сайт.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">2. Использование контента</h2>
            <p>
              Все материалы на данном сайте — тексты, изображения, логотипы — являются
              интеллектуальной собственностью {REQUISITES.name}. Копирование, распространение
              или использование материалов без письменного разрешения правообладателя запрещено.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">3. Точность информации</h2>
            <p>
              Информация на сайте носит исключительно ознакомительный характер. Конкретные
              условия оказания услуг и ценообразование определяются индивидуально по итогам
              осмотра объекта и закрепляются в договоре. Мы оставляем за собой право вносить
              изменения в информацию на сайте без предварительного уведомления.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">4. Ответственность</h2>
            <p>
              {REQUISITES.name} не несет ответственности за любые прямые или косвенные убытки,
              возникшие в результате использования или невозможности использования данного сайта.
              Мы не гарантируем бесперебойную работу сайта и оставляем за собой право
              приостановить его работу для проведения технических работ.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">5. Применимое право</h2>
            <p>
              Настоящие условия регулируются законодательством Российской Федерации.
              Все споры, возникающие в связи с использованием сайта, подлежат рассмотрению
              в судах по месту регистрации {REQUISITES.name}.
            </p>
          </section>

          <section className="glass-panel p-8">
            <h2 className="font-[700] text-[#E0EBFC] text-xl mb-4">6. Контакты</h2>
            <p>
              По вопросам, связанным с использованием сайта, обращайтесь:{" "}
              <a href="mailto:ip-yamsh@mail.ru" className="text-[#5286AC] hover:underline">ip-yamsh@mail.ru</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
