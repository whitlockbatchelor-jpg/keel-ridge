export function LogoMark({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 40 L14 8 L21 20 L28 4 L38 40"
        stroke="#C2956B"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M4 40 C14 36 28 36 38 40"
        stroke="#C2956B"
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}
