"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#111512]">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-3 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
  {[
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
  ].map((item) => {
    const active = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`relative text-sm font-semibold transition ${
          active
            ? "text-brand-green-light"
            : "text-white hover:text-brand-green-light"
        }`}
      >
        {item.label}

        {active && (
          <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-brand-green" />
        )}
      </Link>
    );
  })}
</nav>

        {/* Desktop Quote Button */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#111512] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-base font-semibold text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-base font-semibold text-white"
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-base font-semibold text-white"
            >
              Services
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base font-semibold text-white"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-brand-green px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-brand-green-dark"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}