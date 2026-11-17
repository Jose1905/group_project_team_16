import Image from "next/image";
import Link from "next/link";


const projects = [
  {
    title: "ECU 911 RFID Access Control",
    description:
      "A web application for managing and monitoring access using RFID cards.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    link: "https://github.com/ivanchulde",
  },
  {
    title: "High School Course Enrollment",
    description:
      "A full-stack web application for managing high school course enrollment.",
    technologies: ["Node.js", "Express", "MongoDB", "JavaScript"],
    link: "https://github.com/ivanchulde",
  },
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-border bg-linear-to-b from-primary-light/70 via-background to-background">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-24">
          <Image
            src="/ivan-chulde.png"
            alt="Iván Chulde"
            width={128}
            height={171}
            preload
            className="avatar-photo mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg ring-4 ring-primary/15"
          />

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Full-Stack Developer
          </span>

          <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hi, I&apos;m Iván Chulde
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted">
            I&apos;m an Electronics and Communications Engineer and a
            full-stack development student. I enjoy building web
            applications and learning new technologies with Next.js, React,
            TypeScript, and Node.js.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/30 hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
              Portfolio
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-sm font-semibold text-primary transition hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            View all projects &rarr;
          </Link>
        </div>

        
      </section>
    </main>
  );
}
