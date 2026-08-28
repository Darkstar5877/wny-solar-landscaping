import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-brand-black text-white sm:min-h-[850px]">
  <div className="absolute inset-0">
    <div className="absolute inset-0 flex items-center justify-center">
 <div className="absolute inset-0 flex items-center justify-center">
<div className="absolute inset-0">
  <Image
    src="/images/logo.jpeg"
    alt="WNY Solar Landscaping LLC"
    fill
    priority
    quality={100}
    sizes="100vw"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/10" />
</div>
</div>

  <div className="absolute inset-0 bg-[rgba(154, 160, 155, 0.48)]" />
</div>

    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,21,18,0.98)_0%,rgba(17,21,18,0.90)_42%,rgba(17,21,18,0.52)_100%)]" />
  </div>

  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-28 lg:px-8">
    <div className="max-w-3xl">
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-brand-green-light">
      
      </p>

      <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
        WNYSolarLandscaping
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
        Specialized mowing, vegetation control, and site maintenance for
        commercial solar facilities throughout Western New York.
      </p>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
      Whether fixed, or tracking, we work carefully around solar infrastructure while keeping your property accessible, maintained, and ready for the people responsible for its operation.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/contact"
          className="rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
        >
          Request a Quote
        </Link>

        <Link
          href="/services"
          className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
        >
          View Our Services
        </Link>
      
      </div>
    </div>
  </div>
</section>

      <section className="bg-brand-dark py-24 text-white sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green-light">
          More Than Landscaping
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          We&apos;re here to help
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
          Solar facilities are complex properties. Vegetation management is
          only one part of keeping a site accessible, maintained, and ready
          for the people responsible for its operation.
        </p>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
          We approach every property with the larger site in mind, working
          carefully around solar infrastructure and communicating visible
          conditions that may need your team&apos;s attention.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
        <div className="bg-white/[0.04] p-8">
          <span className="text-sm font-semibold text-brand-green-light">
            
          </span>
          <h3 className="mt-10 text-xl font-semibold">
            Specialized Landscaping
          </h3>
          <p className="mt-3 leading-7 text-white/55">
            Vegetation management performed with solar facilities in mind.
          </p>
        </div>

        <div className="bg-white/[0.04] p-8">
          <span className="text-sm font-semibold text-brand-green-light">
            
          </span>
          <h3 className="mt-10 text-xl font-semibold">
            Infrastructure Awareness
          </h3>
          <p className="mt-3 leading-7 text-white/55">
            Careful operation around panels, wiring, fencing, and equipment.
          </p>
        </div>

        <div className="bg-white/[0.04] p-8">
          <span className="text-sm font-semibold text-brand-green-light">
            
          </span>
          <h3 className="mt-10 text-xl font-semibold">
            Clear Communication
          </h3>
          <p className="mt-3 leading-7 text-white/55">
            Observations from the field communicated back to your team.
          </p>
        </div>

        <div className="bg-white/[0.04] p-8">
          <span className="text-sm font-semibold text-brand-green-light">
            
          </span>
          <h3 className="mt-10 text-xl font-semibold">
            Reliable Service
          </h3>
          <p className="mt-3 leading-7 text-white/55">
            Professional service built around the needs of commercial sites.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="bg-brand-green py-20 text-white sm:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
          Let&apos;s Talk
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Have a solar site that needs attention?
        </h2>

        <p className="mt-5 text-lg leading-8 text-white/70">
          Tell us about your facility and the services you need. We&apos;ll
          discuss how WNY Solar Landscaping can help.
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-flex w-fit rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-green transition hover:bg-background"
      >
        Request a Quote
      </Link>
    </div>
  </div>
</section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                Specialized Service
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black sm:text-5xl">
                Solar sites require more than mowing.
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-8">
              <p className="text-lg leading-8 text-text-secondary">
                WNY Solar Landscaping provides professional vegetation
                management while working carefully around the infrastructure
                that keeps commercial solar facilities operating.
              </p>

              <p className="mt-6 text-lg leading-8 text-text-secondary">
                We also communicate visible site conditions that may warrant
                further attention, giving facility operators another set of
                eyes on the property.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-border bg-surface p-8">
              <p className="text-sm font-semibold text-brand-green">01</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-brand-black">
                Vegetation Management
              </h3>
              <p className="mt-4 leading-7 text-text-secondary">
                Routine mowing and vegetation control designed around
                commercial solar facilities.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-surface p-8">
              <p className="text-sm font-semibold text-brand-green">02</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-brand-black">
                Site Awareness
              </h3>
              <p className="mt-4 leading-7 text-text-secondary">
                Careful work around panels, fencing, access areas, and other
                critical site infrastructure.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-surface p-8">
              <p className="text-sm font-semibold text-brand-green">03</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-brand-black">
                Site Feedback
              </h3>
              <p className="mt-4 leading-7 text-text-secondary">
                Visible site conditions can be communicated to your team when
                something appears to warrant further inspection.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}