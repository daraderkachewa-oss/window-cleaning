/* Brand lockup: faceted monogram mark (SVG in /public) + 3-line descriptor.
   Rendered as <img>; the browser clips to the SVG viewBox, so any
   out-of-viewBox artboard notes in the source file never show. */
export default function Logo({
  height = 46,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand-logo.svg"
        alt="Логотип компании по мойке остекления фасадов"
        style={{ height, width: "auto" }}
        className="shrink-0 select-none"
      />
      <span className="font-display text-[11.5px] font-semibold leading-[1.22] tracking-[0.04em] text-[var(--ink)]">
        мойка
        <br />
        остекления
        <br />
        фасадов
      </span>
    </span>
  );
}
