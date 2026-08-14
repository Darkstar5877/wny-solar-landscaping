import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial solar vegetation management, site maintenance, and site observation services throughout Western New York.",
};

const services = [
  {
    number: "01",
    title: "Solar Vegetation Management",
    description:
      "Routine mowing and vegetation control designed specifically for commercial solar facilities.",
    details: [
      "Vegetation control throughout solar arrays",
      "Mowing between panel rows",
      "Management of difficult-to-access areas",
      "Recurring seasonal maintenance",
    ],
  },
  {
    number: "02",
    title: "Panel & Row Maintenance",
    description:
      "Careful vegetation management around solar arrays and the infrastructure that supports them.",
    details: [
      "Vegetation management beneath and around panels",
      "Maintenance between array rows",
      "Careful operation around solar equipment",
      "Site-specific maintenance planning",
    ],
  },
  {
    number: "03",
    title: "Perimeter & Access Maintenance",
    description:
      "Keeping the areas surrounding a solar facility manageable, accessible, and professionally maintained.",
    details: [
      "Fence-line vegetation management",
      "Access area maintenance",
      "Site perimeter mowing",
      "Maintenance around gates and entrances",
    ],
  },
  {
    number: "04",
    title: "Site Observation & Feedback",
    description:
      "Another set of eyes on the property while routine vegetation work is being performed.",
    details: [
      "Observation of visible site conditions",
      "Communication of potential concerns",
      "Documentation when appropriate",
      "Feedback to facility personnel",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-black pb-24 pt-40 text-white sm:pb-28 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-light">
              Our Services
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Professional vegetation management built around solar.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Specialized landscaping and site maintenance for commercial
              solar facilities throughout Western New York.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                Solar-Specific Service
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black sm:text-5xl">
                The right approach for a different kind of property.
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-8">
              <p className="text-lg leading-8 text-text-secondary">
                Maintaining a solar facility requires working around equipment,
                panel arrays, fencing, access points, and other infrastructure
                that traditional landscaping companies may not encounter.
              </p>

              <p className="mt-6 text-lg leading-8 text-text-secondary">
                WNY Solar Landscaping approaches vegetation management with
                the needs of the entire facility in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service List */}
      <section className="bg-surface-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-10 rounded-3xl border border-border bg-surface p-8 sm:p-10 lg:grid-cols-[0.15fr_0.85fr_1fr] lg:p-12"
              >
                <div>
                  <span className="text-sm font-semibold text-brand-green">
                    {service.number}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-brand-black sm:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-text-secondary">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <ul className="space-y-4">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Site Feedback */}
      <section className="bg-brand-dark py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green-light">
                Another Set of Eyes
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                We&apos;re already on the property.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/65">
                While performing vegetation management, our team can
                communicate visible conditions that appear to warrant
                additional attention from facility personnel.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/65">
                This service is intended to supplement routine site awareness,
                not replace electrical, engineering, safety, or other
                professional inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-20 text-white sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
              Your Facility
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Need a maintenance plan for your solar site?
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              Tell us about the property and the services you&apos;re looking
              for.
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