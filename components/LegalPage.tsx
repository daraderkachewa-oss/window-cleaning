import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";
import Logo from "./Logo";

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-7 md:p-9">
      <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-[var(--ink-dim)]">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#5286AC]/15 bg-[#07131f]/60 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-4xl items-center justify-between px-5 sm:px-6">
          <Link href="/" aria-label="На главную">
            <Logo height={42} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--accent)] transition-colors hover:text-white"
          >
            <ArrowLeft size={15} />
            На главную
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-6">
        <span className="eyebrow">Юридические документы</span>
        <h1 className="display-xl mt-5 text-[clamp(1.9rem,5vw,3.2rem)]">{title}</h1>
        <p className="mt-3 text-[13px] text-[var(--ink-muted)]">{updated}</p>
        <div className="mt-12 space-y-4">{children}</div>
      </main>

      <Footer />
    </>
  );
}
