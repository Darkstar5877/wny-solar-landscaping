import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Contact WNY Solar Landscaping about vegetation management and site maintenance for your commercial solar facility.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-black pb-24 pt-40 text-white sm:pb-28 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-light">
              Contact
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Tell us about your solar site.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Looking for vegetation management or site maintenance? Give us
              some information about your facility and we&apos;ll get in
              touch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          
          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              Request a Site Assessment
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-brand-black">
              Let&apos;s talk about your facility.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-text-secondary">
              Provide some basic information about your solar site and the
              services you&apos;re looking for. We&apos;ll follow up to
              discuss the property and determine the next steps.
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-sm font-semibold text-brand-black">
                Service Area
              </p>

              <p className="mt-2 text-text-secondary">
                Western New York and surrounding areas
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-sm font-semibold text-brand-black">
                Commercial Services
              </p>

              <p className="mt-2 text-text-secondary">
                Solar farms, commercial solar facilities, developers,
                operators, and property managers.
              </p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-10">
            <form className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-brand-black"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-brand-black"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold text-brand-black"
                >
                  Company / Organization
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-brand-black"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-brand-black"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold text-brand-black"
                >
                  Project Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="City, NY"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition placeholder:text-text-secondary/50 focus:border-brand-green"
                />
              </div>

              <div>
                <label
                  htmlFor="siteSize"
                  className="mb-2 block text-sm font-semibold text-brand-black"
                >
                  Approximate Site Size
                </label>

                <input
                  id="siteSize"
                  name="siteSize"
                  type="text"
                  placeholder="Example: 25 acres"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition placeholder:text-text-secondary/50 focus:border-brand-green"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-brand-black"
                >
                  Tell Us About the Project
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about the property, current vegetation conditions, services needed, or any other relevant information."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition placeholder:text-text-secondary/50 focus:border-brand-green"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-green-dark sm:w-auto"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}