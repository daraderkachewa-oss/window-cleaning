"use client";
import { TrendingDown, Users, AlertTriangle, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROBLEMS = [
  {
    icon: TrendingDown,
    title: "Снижение арендной ставки",
    description:
      "Загрязненный фасад сигнализирует арендаторам об уровне управления объектом. По данным CBRE, ухоженность здания влияет на ставку аренды до 8–12%.",
  },
  {
    icon: Users,
    title: "Первое впечатление клиентов",
    description:
      "73% посетителей формируют мнение о компании, расположенной в здании, ещё до входа. Загрязненное остекление напрямую влияет на трафик ваших арендаторов.",
  },
  {
    icon: AlertTriangle,
    title: "Ускоренная деградация фасада",
    description:
      "Кислотные осадки и минеральные отложения разрушают поверхность стекла за 2–3 сезона. Стоимость замены стеклопакета в 40–60 раз превышает стоимость регулярного обслуживания.",
  },
  {
    icon: Layers,
    title: "Нарушение светопропускания",
    description:
      "Загрязненное стекло снижает световой поток на 20–35%. Это прямые потери на электроэнергии для освещения и ухудшение условий работы сотрудников.",
  },
];

export default function Problem() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.12 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#105785]/15 blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Почему это важно</div>
        <div className="reveal-item grid lg:grid-cols-2 gap-4 lg:gap-8 items-end mb-16">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            Почему загрязненное остекление{" "}
            <span className="gradient-text">снижает ценность объекта</span>
          </h2>
          <p className="text-[#E0EBFC]/60 text-lg leading-relaxed">
            Фасад — это лицо актива. Состояние стекла напрямую отражается на стоимости объекта,
            арендной ставке и репутации управляющей компании.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="reveal-item glass-panel p-7 transition-glass hover:bg-[#105785]/30 hover:border-[#5286AC]/40 hover:shadow-[0_0_50px_rgba(82,134,172,0.2)] hover:-translate-y-1 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5286AC]/15 border border-[#5286AC]/20 flex items-center justify-center mb-5">
                <Icon size={22} className="text-[#5286AC]" />
              </div>
              <h3 className="font-[600] text-[#E0EBFC] text-lg mb-3 leading-tight">{title}</h3>
              <p className="text-[#E0EBFC]/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA bridge */}
        <div className="reveal-item mt-14 text-center">
          <p className="text-[#E0EBFC]/50 text-base mb-4">
            Регулярное обслуживание решает все эти проблемы и обходится значительно дешевле последствий
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-[#5286AC] hover:text-[#E0EBFC] font-[600] text-sm tracking-wide border border-[#5286AC]/40 hover:border-[#5286AC] rounded-full px-6 py-3 transition-all duration-300"
          >
            Рассчитать стоимость обслуживания →
          </button>
        </div>
      </div>
    </section>
  );
}
