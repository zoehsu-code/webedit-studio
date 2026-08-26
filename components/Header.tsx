"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
      <div className="container flex h-16 items-center justify-between gap-5 lg:h-[72px]">
        <Link
          href="#top"
          className="text-base font-extrabold uppercase tracking-[0.08em] sm:text-lg"
          onClick={() => setOpen(false)}
        >
          {siteConfig.businessName}
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/86 transition hover:text-maize"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-md bg-maize px-4 py-2.5 text-sm font-extrabold text-navy transition hover:-translate-y-0.5 hover:bg-[#ffd83d]"
          >
            Get a Free Estimate
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-navy transition-[max-height,opacity] duration-200 lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-3 text-base font-semibold text-white/90 hover:bg-white/[0.08] hover:text-maize"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/35 px-4 py-3 font-bold text-white"
              onClick={() => setOpen(false)}
            >
              <Phone size={18} aria-hidden="true" /> Call Ray
            </Link>
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-maize px-4 py-3 font-extrabold text-navy"
              onClick={() => setOpen(false)}
            >
              Get a Free Estimate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
