type LogoProps = {
  idPrefix?: string;
  className?: string;
};

export default function Logo({
  idPrefix = "vebnora",
  className = "",
}: LogoProps) {
  const gradientId = `${idPrefix}-gradient`;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="64"
            y2="64"
          >
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset="0.55" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <polyline
          points="20,18 6,32 20,46"
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
        />
        <polyline
          points="44,18 58,32 44,46"
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
        />
        <polyline points="24,22 32,42 40,22" stroke="#ffffff" strokeWidth="6" />
      </svg>
      <span className="text-2xl font-black tracking-tight">
        Vebnora<span className="text-violet-400">.</span>
      </span>
      <span className="sr-only">Web design</span>
    </span>
  );
}
