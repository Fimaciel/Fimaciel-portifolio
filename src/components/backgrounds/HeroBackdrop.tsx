export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-backdrop-field absolute inset-0" />
      <div className="bg-grid mask-hero-grid absolute inset-0 opacity-[0.09] dark:opacity-[0.12]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
