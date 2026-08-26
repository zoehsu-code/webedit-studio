import { BadgeCheck, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";

const trustItems = ["Certified Arborist", "Local & Independent", "Free Estimates"];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[620px] overflow-hidden bg-navy text-white sm:min-h-[680px]">
      <Image
        src="/images/hero-tree-removal.jpg"
        alt="Placeholder image of residential tree removal work near a Southeast Michigan home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,39,76,0.92),rgba(0,39,76,0.72)_48%,rgba(0,39,76,0.36))]" />
      <div className="container relative flex min-h-[620px] items-center py-20 sm:min-h-[680px]">
        <div className="max-w-[680px]">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-maize">
            <MapPin size={16} aria-hidden="true" />
            Certified Arborist · Southeast Michigan
          </p>
          <h1 className="text-[clamp(2.55rem,7vw,4.5rem)] font-extrabold leading-[1.02]">
            Professional Tree Removal, Done Right.
          </h1>
          <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/88 sm:text-xl">
            Safe, reliable tree removal and tree care for homeowners across Southeast Michigan.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 text-sm font-bold text-white/90">
                <BadgeCheck size={18} className="text-maize" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9 grid gap-3 sm:flex">
            <ButtonLink href="#contact" className="w-full sm:w-auto">
              Get a Free Estimate
            </ButtonLink>
            <ButtonLink href={siteConfig.phoneHref} variant="secondary" className="w-full sm:w-auto">
              <Phone size={18} aria-hidden="true" /> Call Ray
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
