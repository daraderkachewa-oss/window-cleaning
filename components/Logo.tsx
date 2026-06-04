/* Brand lockup: faceted monogram mark (SVG in /public) + 3-line descriptor.
   Rendered as <img>; the browser clips to the SVG viewBox, so any
   out-of-viewBox artboard notes in the source file never show. */
export default function Logo({
  height = 46,
  className = "",
  responsive = false,
}: {
  height?: number;
  className?: string;
  /* When true, the lockup shrinks on small screens so its layout box
     genuinely shrinks (needed for even flex spacing in the header). */
  responsive?: boolean;
}) {
  return (
    <span className={`flex items-center ${responsive ? "gap-1.5 sm:gap-3" : "gap-3"} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand-logo.svg"
        alt="Логотип компании по мойке остекления фасадов"
        style={responsive ? undefined : { height, width: "auto" }}
        className={`w-auto shrink-0 select-none ${responsive ? "h-8 sm:h-11" : ""}`}
      />
      <span
        className={`font-display font-semibold tracking-[0.04em] text-[var(--ink)] ${
          responsive ? "text-[9px] leading-[1.2] sm:text-[11.5px]" : "text-[11.5px] leading-[1.22]"
        }`}
      >
        мойка
        <br />
        остекления
        <br />
        фасадов
      </span>
    </span>
  );
}
