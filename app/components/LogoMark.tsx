/**
 * Secure RFID mark used by the site header and footer.
 */
export default function LogoMark({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2.75 4.75 5.6v5.55c0 4.28 3 8.18 7.25 9.6 4.25-1.42 7.25-5.32 7.25-9.6V5.6L12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.15 8.55a4 4 0 0 1 5.7 0M10.45 10.85a2.2 2.2 0 0 1 3.1 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="13.85" r="1.05" fill="currentColor" />
    </svg>
  );
}
