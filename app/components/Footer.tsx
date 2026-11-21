import Link from "next/link";
import LogoMark from "./LogoMark";

const platformLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/employees", label: "Employees" },
  { href: "/cards", label: "RFID Cards" },
];

const accessLinks = [
  { href: "/facilities", label: "Facilities" },
  { href: "/doors", label: "Doors" },
  { href: "/access-records", label: "Access Records" },
];

const teamMembers = [
  "David Vega",
  "Ivan Chulde",
  "Jose Quiñones",
  "Peter Msamba",
];
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-foreground text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 ring-inset">
                <LogoMark className="h-6 w-6 text-white" />
              </span>
              <span className="leading-none">
                <span className="block text-lg font-bold text-white">
                  RFID <span className="text-accent">911</span>
                </span>
                <span className="mt-1 block text-[10px] font-medium tracking-[0.18em] text-slate-400 uppercase">
                  Access Management
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A centralized platform for managing employees, RFID credentials,
              facilities, doors, and a traceable history of access events.
            </p>
          </div>

          <nav aria-label="Platform links">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-white uppercase">
              Platform
            </h2>
            <ul className="mt-4 space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Access control links">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-white uppercase">
              Access Control
            </h2>
            <ul className="mt-4 space-y-2.5">
              {accessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-white uppercase">
              Project Team
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {teamMembers.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              WDD 430 &middot; Team 16
              <br />
              Web Application Development
            </p>

            <Link
              href="/login"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Administrator sign in
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} RFID 911. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-400"
            />
            Secure facility access management
          </p>
        </div>
      </div>
    </footer>
  );
}
