import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Circle,
  Coffee,
  Compass,
  Cpu,
  Crosshair,
  Dice5,
  Eye,
  Film,
  Flame,
  Gamepad2,
  Ghost,
  Headphones,
  Heart,
  Hexagon,
  Joystick,
  Keyboard,
  Link2,
  MapPin,
  Monitor,
  Mountain,
  Music2,
  Shield,
  Sparkles,
  Star,
  Swords,
  Terminal,
  Trophy,
  Zap,
} from "lucide-react";

/**
 * Fundo tipo "folha de stickers": só traço (ícones Lucide + 2 SVGs mínimos).
 * Referências genéricas (aventura, jogos, anime/cultura pop) — sem arte de terceiros.
 */
const STROKE = 1.35;

type Placement = {
  Icon: LucideIcon;
  top: string;
  left: string;
  rotate: number;
  size: number;
};

const LUCIDE_PLACEMENTS: Placement[] = [
  { Icon: Gamepad2, top: "4%", left: "6%", rotate: -14, size: 46 },
  { Icon: Flame, top: "8%", left: "78%", rotate: 8, size: 40 },
  { Icon: Star, top: "12%", left: "42%", rotate: -22, size: 36 },
  { Icon: Swords, top: "6%", left: "58%", rotate: 18, size: 44 },
  { Icon: Ghost, top: "18%", left: "88%", rotate: -6, size: 38 },
  { Icon: Joystick, top: "22%", left: "12%", rotate: 12, size: 42 },
  { Icon: Hexagon, top: "28%", left: "72%", rotate: -10, size: 34 },
  { Icon: Sparkles, top: "32%", left: "28%", rotate: 16, size: 32 },
  { Icon: Heart, top: "38%", left: "52%", rotate: -8, size: 36 },
  { Icon: Dice5, top: "14%", left: "24%", rotate: 22, size: 40 },
  { Icon: Crosshair, top: "44%", left: "8%", rotate: -4, size: 38 },
  { Icon: Shield, top: "48%", left: "82%", rotate: 14, size: 42 },
  { Icon: Zap, top: "52%", left: "38%", rotate: -18, size: 34 },
  { Icon: BookOpen, top: "58%", left: "64%", rotate: 6, size: 40 },
  { Icon: Link2, top: "62%", left: "18%", rotate: -12, size: 36 },
  { Icon: Eye, top: "66%", left: "46%", rotate: 10, size: 38 },
  { Icon: MapPin, top: "70%", left: "78%", rotate: -16, size: 36 },
  { Icon: Trophy, top: "74%", left: "12%", rotate: 8, size: 40 },
  { Icon: Coffee, top: "78%", left: "56%", rotate: -10, size: 38 },
  { Icon: Headphones, top: "82%", left: "32%", rotate: 14, size: 42 },
  { Icon: Music2, top: "86%", left: "68%", rotate: -6, size: 34 },
  { Icon: Film, top: "90%", left: "88%", rotate: 20, size: 36 },
  { Icon: Mountain, top: "16%", left: "94%", rotate: -20, size: 40 },
  { Icon: Compass, top: "36%", left: "4%", rotate: 12, size: 38 },
  { Icon: Monitor, top: "54%", left: "58%", rotate: -8, size: 40 },
  { Icon: Keyboard, top: "60%", left: "92%", rotate: 16, size: 44 },
  { Icon: Terminal, top: "24%", left: "48%", rotate: -14, size: 36 },
  { Icon: Cpu, top: "68%", left: "94%", rotate: 6, size: 38 },
  { Icon: Circle, top: "40%", left: "68%", rotate: 0, size: 28 },
  { Icon: Gamepad2, top: "76%", left: "44%", rotate: -24, size: 42 },
  { Icon: Ghost, top: "92%", left: "22%", rotate: 10, size: 34 },
  { Icon: Star, top: "50%", left: "26%", rotate: 24, size: 30 },
  { Icon: Sparkles, top: "8%", left: "34%", rotate: -18, size: 28 },
  { Icon: Swords, top: "96%", left: "52%", rotate: -8, size: 38 },
];

/** Cartão / credencial — só contorno, estilo genérico. */
function LicenseCardOutline({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="5" y="10" width="38" height="26" rx="4" stroke="currentColor" strokeWidth={STROKE} />
      <rect x="9" y="15" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth={STROKE} />
      <line
        x1="27"
        y1="17"
        x2="39"
        y2="17"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <line
        x1="27"
        y1="22"
        x2="37"
        y2="22"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <line
        x1="27"
        y1="27"
        x2="35"
        y2="27"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Aranha minimalista — traço fino, não é reprodução de marca. */
function SpiderDoodle({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="5" />
        <ellipse cx="24" cy="30" rx="7" ry="8" />
        <path d="M24 15 L18 8 M24 15 L30 8 M17 22 L8 16 M31 22 L40 16 M16 28 L6 30 M32 28 L42 30 M18 36 L12 44 M30 36 L36 44" />
      </g>
    </svg>
  );
}

export default function StickerLineArtBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden>
      <div className="absolute inset-0 text-muted-foreground [opacity:0.11] dark:[opacity:0.16]">
        {LUCIDE_PLACEMENTS.map(({ Icon, top, left, rotate, size }, i) => (
          <div
            key={`lucide-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top, left, transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
          >
            <Icon size={size} strokeWidth={STROKE} absoluteStrokeWidth />
          </div>
        ))}

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: "26%", left: "62%", transform: "translate(-50%, -50%) rotate(-11deg)" }}
        >
          <LicenseCardOutline size={52} />
        </div>
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: "56%", left: "22%", transform: "translate(-50%, -50%) rotate(19deg)" }}
        >
          <SpiderDoodle size={44} />
        </div>
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: "88%", left: "8%", transform: "translate(-50%, -50%) rotate(-7deg)" }}
        >
          <LicenseCardOutline size={44} />
        </div>
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: "34%", left: "38%", transform: "translate(-50%, -50%) rotate(14deg)" }}
        >
          <SpiderDoodle size={36} />
        </div>
      </div>
    </div>
  );
}
