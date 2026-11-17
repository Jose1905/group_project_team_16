"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/employees", label: "Employees" },
  { href: "/cards", label: "RFID Cards" },
  { href: "/facilities", label: "Facilities" },
  { href: "/doors", label: "Doors" },
  { href: "/access-records", label: "Access Records" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary-dark text-white shadow-lg shadow-slate-950/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20 ring-inset">
            <LogoMark className="h-6 w-6 text-white" />
          </span>

          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-lg font-bold tracking-tight">
              RFID <span className="text-accent">911</span>
            </span>
            <span className="mt-1 hidden text-[10px] font-medium tracking-[0.18em] text-blue-200 uppercase sm:block">
              Access Management
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark ${
                  active
                    ? "bg-white text-primary-dark shadow-sm"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/login"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-dark shadow-sm transition hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark lg:inline-flex"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sign in
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-blue-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark lg:hidden"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>

            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-primary-dark lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-6xl px-4 py-4 sm:px-6"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg border-l-2 px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                        active
                          ? "border-accent bg-white/10 text-white"
                          : "border-transparent text-blue-100 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 opacity-60"
                      >
                        <path
                          d="m9 5 7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/login"
              onClick={closeMenu}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-primary-dark shadow-sm transition hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sign in
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
