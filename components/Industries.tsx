"use client";
import {
  Building2, ShoppingBag, Briefcase, Car,
  Hotel, HeartPulse, Home, GraduationCap,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const INDUSTRIES = [
  { title: "Бизнес-центры",              Icon: Building2      },
  { title: "Торговые центры",            Icon: ShoppingBag    },
  { title: "Офисные здания",             Icon: Briefcase      },
  { title: "Автосалоны",                 Icon: Car            },
  { title: "Гостиницы",                  Icon: Hotel          },
  { title: "Медицинские центры",         Icon: HeartPulse     },
  { title: "Жилые комплексы",            Icon: Home           },
  { title: "Образовательные учреждения", Icon: GraduationCap  },
];

export default function Industries() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.07 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Объекты</div>

        <div className="reveal-item mb-12">
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 46px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Работаем с любыми{" "}
            <span className="gradient-text">типами объектов</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {INDUSTRIES.map(({ title, Icon }) => (
            <div
              key={title}
              className="reveal-item glass glow-card flex flex-col items-center gap-3 text-center cursor-default"
              style={{ padding: "20px 14px 22px" }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: 40, height: 40,
                  background: "rgba(74,143,196,0.12)",
                  border: "1px solid rgba(90,174,232,0.18)",
                }}
              >
                <Icon size={17} style={{ color: "#5aaee8" }} />
              </div>
              <span
                style={{
                  fontSize: "11px", fontWeight: 600,
                  lineHeight: 1.35, color: "rgba(221,238,255,0.70)",
                }}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
