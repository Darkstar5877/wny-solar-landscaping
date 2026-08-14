import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore solar vegetation management and commercial solar site maintenance projects from WNY Solar Landscaping.",
};

const projects = [
  {
    title: "Solar Site Vegetation Management",
    location: "Western New York",
    service: "Vegetation Management",
  },
  {
    title: "Solar Array Maintenance",
    location: "Western New York",
    service: "Site Maintenance",
  },
  {
    title: "Commercial Solar Property",
    location: "Western New York",
    service: "Vegetation & Site Management",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-black pb-24 pt-40 text-white sm:pb-28 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-light">
              Our Work
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Solar sites maintained with purpose.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              A look at vegetation management and site maintenance work
              performed at commercial solar facilities throughout Western New
              York.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                Project Portfolio
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black sm:text-5xl">
                Work you can see.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-text-secondary">
              Project photography and additional site information will be
              added as our portfolio grows.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {projects.map((project, index) => (
              <article key={project.title}>
                <div
                  className={`relative flex min-h-[520px] items-end overflow-hidden rounded-3xl ${
                    index === 0
                      ? "bg-brand-green-light"
                      : index === 1
                        ? "bg-surface-muted"
                        : "bg-brand-dark"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                        index === 2
                          ? "text-white/35"
                          : "text-brand-green/50"
                      }`}
                    >
                      Project Photography
                    </p>
                  </div>

                  <div className="relative z-10 m-6 max-w-xl rounded-2xl bg-white/95 p-7 shadow-sm sm:m-8 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
                      {project.location}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-black sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-text-secondary">
                      {project.service}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Document */}
      <section className="bg-surface-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                On Site
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black sm:text-5xl">
                Showing the work behind the results.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Before & after conditions",
                "Vegetation management",
                "Solar array access",
                "Site & infrastructure conditions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <span className="mb-5 block h-2 w-2 rounded-full bg-brand-green" />
                  <p className="font-semibold text-brand-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-20 text-white sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
              Your Site Could Be Next
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Let&apos;s talk about your facility.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              Tell us about your solar property and its vegetation management
              needs.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-green transition hover:bg-background"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}