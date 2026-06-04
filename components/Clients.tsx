"use client";

import { CLIENTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function Mark({ i }: { i: number }) {
  const shapes = [
    <path key="a" d="M4 14 12 4l8 10-8 6-8-6Z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
    <path key="b" d="M12 3 21 8v8l-9 5-9-5V8l9-5Z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
    <><circle key="c1" cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" fill="none" /><path key="c2" d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.2" /></>,
    <rect key="d" x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  ];
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="text-[var(--ink-faint)]" aria-hidden>
      {shapes[i % shapes.length]}
    </svg>
  );
}

function LogoChip({ name, i }: { name: string; i: number }) {
  return (
    <div className="mx-2 flex items-center gap-3 whitespace-nowrap rounded-2xl border border-[#5286AC]/15 bg-[#003556]/30 px-6 py-4 backdrop-blur-md">
      <Mark i={i} />
      <span className="text-[15px] font-medium tracking-wide text-[var(--ink-muted)]">{name}</span>
    </div>
  );
}

function Row({ reverse }: { reverse?: boolean }) {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <div className="marquee-mask marquee-paused overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-right" : "marquee-left"}`}>
        {list.map((name, i) => (
          <LogoChip key={`${name}-${i}`} name={name} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Клиенты"
          title={<>Нам доверяют объекты <span className="gradient-text">по всей Москве</span></>}
          subtitle="Управляющие компании, ритейл, дилерские центры и девелоперы — с многими работаем по нескольку лет."
          center
        />
      </div>
      <div className="mt-14 space-y-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
