import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WNY Solar Landscaping for commercial solar vegetation management and site maintenance.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-brand-black py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-light">
            Get In Touch
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Contact
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Reach out to WNY Solar Landscaping about commercial solar
            vegetation management and site maintenance.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl space-y-10">
            <div>
              <h2 className="text-lg font-bold text-brand-black">
                Located
              </h2>

              <p className="mt-2 text-lg text-text-secondary">
                Western New York
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black">
                Email
              </h2>

              <a
                href="mailto:wnysolarlandscaping@gmail.com"
                className="mt-2 inline-block text-lg text-text-secondary transition hover:text-brand-green"
              >
                wnysolarlandscaping@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black">
                Call
              </h2>

              <a
                href="tel:17163922427"
                className="mt-2 inline-block text-lg text-text-secondary transition hover:text-brand-green"
              >
                (716) 392-2427
              </a>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black">
                Hours
              </h2>

              <p className="mt-2 text-lg leading-8 text-text-secondary">
                Monday—Friday
                <br />
                8am—5pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}