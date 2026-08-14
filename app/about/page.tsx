import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about WNY Solar Landscaping and our specialized approach to commercial solar site vegetation management throughout Western New York.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-brand-black pb-24 pt-40 text-white sm:pb-28 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-light">
              About WNY Solar Landscaping
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Specialized maintenance for a specialized industry.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              WNY Solar Landscaping provides professional vegetation
              management and site maintenance services for commercial solar
              facilities throughout Western New York.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                Who We Are
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black sm:text-5xl">
                More than traditional landscaping.
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-8">
              <p className="text-lg leading-8 text-text-secondary">
                Solar facilities present challenges that are different from
                traditional commercial properties. Vegetation must be managed
                around panel arrays, fencing, access areas, and critical site
                infrastructure.
              </p>

              <p className="mt-6 text-lg leading-8 text-text-secondary">
                Our approach combines professional vegetation management with
                awareness of the larger solar facility. While working on a
                property, we remain attentive to visible site conditions and
                communicate observations that may warrant additional attention
                from the appropriate personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black sm:text-5xl">
              The details matter.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Reliability",
                text: "Consistent service and communication that commercial operators can depend on.",
              },
              {
                number: "02",
                title: "Site Awareness",
                text: "Work performed with attention to the infrastructure and conditions around us.",
              },
              {
                number: "03",
                title: "Professionalism",
                text: "A commercial-first approach to service, communication, and property care.",
              },
              {
                number: "04",
                title: "Attention to Detail",
                text: "We look beyond the grass and remain aware of the overall condition of the site.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-border bg-surface p-8"
              >
                <p className="text-sm font-semibold text-brand-green">
                  {item.number}
                </p>

                <h3 className="mt-8 text-xl font-semibold text-brand-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}