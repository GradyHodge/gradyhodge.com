// Inline SVG octopus submark — used in Nav and favicon contexts
export function OctopusMark({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="14" cy="10" rx="8.5" ry="8" stroke="currentColor" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="10.5" cy="9" r="1.3" fill="currentColor" />
      <circle cx="17.5" cy="9" r="1.3" fill="currentColor" />
      {/* Tentacles — 6 curving down, circuit-tip style */}
      <path d="M6 17 C4.5 19.5 4 22 5.5 24 C6.5 25.5 5.5 27 4.5 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 18.5 C8.5 21 8 23.5 9 25.5 C9.8 27 9 28.5 8 29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 19 C12 22 11.5 24.5 12.5 26.5 C13 27.5 12.5 29 12 29.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 19 C16.5 22 16 24.5 17 26.5 C17.5 27.5 17 29 16.5 29.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M19 18.5 C19.5 21 20 23.5 19 25.5 C18.2 27 19 28.5 20 29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M22 17 C23.5 19.5 24 22 22.5 24 C21.5 25.5 22.5 27 23.5 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
