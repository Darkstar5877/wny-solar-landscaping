import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex"
              aria-label="WNY Solar Landscaping home"
            >
              <Image
                src="/images/logo.jpeg"
                alt="WNY Solar Landscaping LLC"
                width={150}
                height={75}
                className="h-auto w-[140px]"
              />
            </Link>

            <p className="mt-6 max-w-md leading-7 text-white/55">
              Specialized mowing, vegetation control, and site maintenance
              for commercial solar facilities throughout Western New York.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4">
              <Link href="/" className="text-white/70 transition hover:text-white">
                Home
              </Link>

              <Link
                href="/about"
                className="text-white/70 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-white/70 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/projects"
                className="text-white/70 transition hover:text-white"
              >
                Projects
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Work With Us
            </p>

            <p className="mt-6 leading-7 text-white/55">
              Have a commercial solar facility that needs vegetation
              management?
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} WNY Solar Landscaping LLC. All rights
            reserved.
          </p>

          <p>Western New York</p>
        </div>
      </div>
    </footer>
  );
}