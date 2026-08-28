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
              ESTABLISHED IN 2026
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Based out of Western New York, with an extensive background in the O&M side of Solar contstruction, we understand how important it is to have an extra set of eyes on the field.
               When we say we're not just mowing, we mean we offer a visual observation and a detailed report of the integrity of the field as we are on site.
            </p>
          </div>
        </div>
      </section>

      

     
    </main>
  );
}