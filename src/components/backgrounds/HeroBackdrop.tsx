/**
 * Fundo do hero: gradientes radiais + grade — só CSS, sem canvas.
 */
export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-backdrop-glow absolute inset-0" />
      <div className="bg-grid mask-hero-grid absolute inset-0 opacity-[0.045] dark:opacity-[0.08]" />
    </div>
  );
}
