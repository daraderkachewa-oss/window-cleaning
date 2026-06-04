import Reveal from "./motion/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="display-xl mt-5 text-[clamp(1.9rem,4vw,3.1rem)]">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-white/75 md:text-[17px]">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
