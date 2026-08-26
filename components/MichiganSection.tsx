import { CalendarDays } from "lucide-react";
import Image from "next/image";
import SectionIntro from "@/components/SectionIntro";

const seasons = [
  ["Summer", "Storm & wind damage"],
  ["Fall", "Inspection & trimming"],
  ["Winter", "Snow & ice damage"],
  ["Spring", "Cleanup & preventative care"],
];

export default function MichiganSection() {
  return (
    <section className="overflow-hidden bg-navy py-16 text-white sm:py-24 lg:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Built for Michigan"
            title="Built for Michigan Trees & Weather."
            light
          />
          <p className="mt-6 text-lg leading-8 text-white/80">
            Michigan weather can be hard on trees. Heavy snow, ice, thunderstorms, high winds,
            and seasonal changes can leave trees damaged or unstable.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/80">
            Ray provides local tree care designed for the conditions Michigan homeowners
            actually face, from storm damage tree cleanup in Michigan to residential tree
            removal near homes and driveways.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {seasons.map(([season, detail]) => (
              <div key={season} className="border-l-2 border-maize/80 pl-4">
                <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-maize">
                  <CalendarDays size={16} aria-hidden="true" />
                  {season}
                </p>
                <p className="mt-2 text-white/84">{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-md border border-white/12 shadow-soft sm:min-h-[460px]">
          <Image
            src="/images/michigan-weather.jpg"
            alt="Placeholder seasonal Michigan tree image showing suburban weather conditions"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,39,76,0.02),rgba(0,39,76,0.38))]" />
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/14 bg-navy/82 p-5 backdrop-blur-sm">
            <p className="text-sm font-bold text-white/90">
              Southeast Michigan tree removal, trimming, and seasonal cleanup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
