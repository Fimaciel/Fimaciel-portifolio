/**
 * Decorative watermark inspired by Phantom Troupe spider tattoos (member #7).
 * Kept extremely subtle for a professional portfolio context.
 */
const PhantomSpiderWatermark = () => (
  <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden>
    <svg
      className="absolute -bottom-[6%] -right-[8%] w-[min(68vw,480px)] max-w-none text-foreground opacity-[0.032] dark:opacity-[0.052]"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Legs — symmetric, troupe-style silhouette */}
        <path d="M120 52 L96 28 M120 52 L144 28 M120 52 L78 40 M120 52 L162 40" />
        <path d="M86 72 L52 56 M154 72 L188 56 M76 98 L38 88 M164 98 L202 88" />
        <path d="M82 128 L48 124 M158 128 L192 124 M88 158 L58 182 M152 158 L182 182" />
        <path d="M108 188 L92 214 M132 188 L148 214" />
        {/* Head */}
        <circle cx="120" cy="52" r="16" />
        {/* Abdomen */}
        <ellipse cx="120" cy="118" rx="36" ry="42" />
      </g>
      <text
        x="120"
        y="128"
        textAnchor="middle"
        fill="currentColor"
        className="font-heading text-[32px] font-bold"
        style={{ fontFamily: "var(--heading-font), ui-monospace, monospace" }}
      >
        7
      </text>
    </svg>
  </div>
);

export default PhantomSpiderWatermark;
