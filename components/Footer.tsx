import Link from "next/link";
import { siteConfig } from "@/data/site";

const links = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Reviews", "#reviews"],
  ["Service Area", "#service-area"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <>
      <footer className="bg-navy pb-24 pt-12 text-white md:pb-12">
        <div className="container">
          <div className="grid gap-10 border-t border-white/14 pt-10 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
            <div>
              <h2 className="text-xl font-extrabold">{siteConfig.businessName}</h2>
              <div className="mt-4 h-1 w-10 bg-maize" />
              <p className="mt-4 leading-7 text-white/76">
                Certified Arborist
                <br />
                Serving {siteConfig.serviceArea}
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-maize">
                Navigation
              </h3>
              <ul className="mt-4 grid gap-3 text-white/78">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link className="font-semibold hover:text-maize" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-maize">
                Contact
              </h3>
              <ul className="mt-4 grid gap-3 text-white/78">
                <li>
                  <Link className="font-semibold hover:text-maize" href={siteConfig.phoneHref}>
                    {siteConfig.phone}
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold hover:text-maize" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/14 pt-6 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
            <p>© 2026 {siteConfig.businessName}. All rights reserved.</p>
            <p>Built for Southeast Michigan homeowners.</p>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/20 bg-navy p-2 text-sm font-extrabold text-white shadow-[0_-10px_28px_rgba(0,0,0,0.18)] md:hidden">
        <Link href={siteConfig.phoneHref} className="flex min-h-11 items-center justify-center rounded-md border border-white/25">
          Call Ray
        </Link>
        <Link href="#contact" className="ml-2 flex min-h-11 items-center justify-center rounded-md bg-maize text-navy">
          Get Estimate
        </Link>
      </div>
    </>
  );
}
