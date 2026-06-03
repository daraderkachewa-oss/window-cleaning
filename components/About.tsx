"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import { STATS } from "@/lib/constants";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2.2);
  return (
    <div className="glass-panel p-8 text-center">
      <div className="font-[800] text-[#E0EBFC] leading-none mb-2" style={{ fontSize: "clamp(40px, 4vw, 64px)" }}>
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{count}</span>
        <span className="text-[#5286AC]">{suffix}</span>
      </div>
      <div className="text-[#E0EBFC]/60 font-[500] text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#105785]/15 blur-[130px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">О компании</div>

        <div className="reveal-item grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <h2
              className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
            >
              10 лет специализации на{" "}
              <span className="gradient-text">фасадном остеклении</span>
            </h2>
            <p className="text-[#E0EBFC]/65 text-lg leading-relaxed mb-4">
              Мы занимаемся исключительно очисткой светопрозрачных фасадов коммерческой недвижимости.
              Никаких общестроительных работ и смежных услуг — только фасадное остекление.
            </p>
            <p className="text-[#E0EBFC]/65 text-lg leading-relaxed mb-6">
              За 10 лет мы разработали собственные технологические регламенты для каждого типа
              загрязнений и типов остекления. Наши сотрудники имеют допуски к работе на высоте
              и проходят ежегодную аттестацию.
            </p>
            <p className="text-[#E0EBFC]/65 text-lg leading-relaxed">
              Работаем исключительно с юридическими лицами по договору. Весь документооборот —
              без напоминаний со стороны заказчика.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Собственный парк оборудования — не арендуем технику",
              "Все сотрудники в штате — нет субподрядчиков",
              "Застрахованная ответственность за ущерб",
              "Работаем в ночное время и выходные без доплат",
              "Фотофиксация до и после каждого выезда",
              "Полный пакет документов в течение 2 рабочих дней",
            ].map((item, i) => (
              <div key={i} className="reveal-item flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5286AC]/20 border border-[#5286AC]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5286AC]" />
                </div>
                <span className="text-[#E0EBFC]/70 text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="reveal-item grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
