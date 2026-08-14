import Link from "next/link";

export default function Header() {
  return (
   <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111512]">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-6 lg:px-8">
        <Link href="/" className="mr-10 flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-white">
            WNY SOLAR
          </span>

          <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.28em] text-white/70">
            LANDSCAPING
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-white transition hover:text-brand-green-light"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-white transition hover:text-brand-green-light"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-sm font-semibold text-white transition hover:text-brand-green-light"
          >
            Services
          </Link>

          <Link
            href="/projects"
            className="text-sm font-semibold text-white transition hover:text-brand-green-light"
          >
            Projects
          </Link>
        </nav>

        <div className="ml-auto">
          <Link
            href="/contact"
            className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}