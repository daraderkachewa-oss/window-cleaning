import {
  EyeOff, TrendingDown, Users, Hourglass,
  Building2, ShoppingBag, Briefcase, Car, Hotel, HeartPulse, Home, GraduationCap,
  LayoutGrid, PanelsTopLeft, Hammer, Sparkles, CalendarClock,
  ClipboardCheck, Camera, FileText, ShieldCheck, Wrench, Clock,
  Timer, HardHat, FileCheck, BadgeCheck,
  Search, Calculator, ListChecks, Droplets, ScanEye, CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  EyeOff, TrendingDown, Users, Hourglass,
  Building2, ShoppingBag, Briefcase, Car, Hotel, HeartPulse, Home, GraduationCap,
  LayoutGrid, PanelsTopLeft, Hammer, Sparkles, CalendarClock,
  ClipboardCheck, Camera, FileText, ShieldCheck, Wrench, Clock,
  Timer, HardHat, FileCheck, BadgeCheck,
  Search, Calculator, ListChecks, Droplets, ScanEye, CheckCircle2,
};

export function Icon({
  name,
  className,
  size = 22,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const C = MAP[name] ?? Sparkles;
  return <C className={className} size={size} strokeWidth={strokeWidth} aria-hidden />;
}

/* ── Brand-style contact icons (custom thin-stroke set) ─────────── */

type SvgProps = { className?: string; size?: number };

export function PhoneIcon({ className, size = 20 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6.5 3.5h3l1.4 4-2 1.4a12 12 0 0 0 5.8 5.8l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TelegramIcon({ className, size = 20 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M21 4.5 3.6 11.2c-1 .4-1 1.8.1 2.1l4.3 1.3 1.6 5c.3.9 1.4 1.1 2 .4l2.4-2.5 4.3 3.2c.7.5 1.7.1 1.9-.7L21.9 5.6c.2-1-.8-1.6-1.7-1.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m8 14.6 9.5-7.3-6.9 8.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className, size = 20 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
