import { Phone } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="bg-navy py-16 text-white sm:py-24">
      <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-maize">
            Local Tree Help
          </p>
          <h2 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-tight">
            Need a Tree Removed?
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            Whether you&apos;re dealing with a dangerous tree, storm damage, or simply need
            professional advice, get in touch for a free estimate.
          </p>
        </div>
        <div className="grid gap-3 sm:flex lg:grid">
          <ButtonLink href="#contact">Get a Free Estimate</ButtonLink>
          <ButtonLink href={siteConfig.phoneHref} variant="secondary">
            <Phone size={18} aria-hidden="true" />
            Call Ray: {siteConfig.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
