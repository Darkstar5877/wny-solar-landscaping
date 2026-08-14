import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
   <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111512]">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-3 lg:px-8">
       <Link
  href="/"
  className="mr-8 flex shrink-0 items-center"
  aria-label="WNY Solar Landscaping home"
>
  <Image
    src="/images/logo.jpeg"
    alt="WNY Solar Landscaping LLC"
    width={140}
    height={70}
    priority
    className="h-[64px] w-auto object-contain"
  />
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