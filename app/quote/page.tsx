import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from WNY Solar Landscaping for commercial solar vegetation management and site maintenance.",
};

export default function QuotePage() {
  return (
    <main>
      <section className="bg-brand-black py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-light">
            Request a Quote
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Tell us about your solar site.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Provide some information about your facility and the services
            you&apos;re looking for. We&apos;ll follow up to discuss the
            property and next steps.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              Request a Site Assessment
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black">
              Let&apos;s talk about your facility.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-text-secondary">
              Tell us about the site location, approximate size, current
              vegetation conditions, and the services you&apos;re looking for.
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <p className="font-semibold text-brand-black">
                Service Area
              </p>

              <p className="mt-2 text-text-secondary">
                Western New York and surrounding areas
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}