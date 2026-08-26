import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import SectionIntro from "@/components/SectionIntro";

const badges = ["Certified Arborist", "Local Michigan Service", "Residential Tree Care"];

export default function AboutRay() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-md bg-cream shadow-soft">
          <Image
            src="/images/ray-arborist.jpg"
            alt="Placeholder portrait or work photo for Ray, local Southeast Michigan arborist"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionIntro title="Meet Ray" />
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate">
            <p>
              Ray is a local arborist serving homeowners across Southeast Michigan.
              He focuses on safe, practical tree care, clear communication, and
              straightforward recommendations.
            </p>
            <p>
              Whether a tree is damaged, dangerous, or simply in the wrong place,
              Ray works directly with homeowners to find the right solution.
            </p>
            <p>
              No big-company sales process. No unnecessary upsells. Just reliable
              local tree service.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-warm px-4 py-3 text-sm font-extrabold text-navy"
              >
                <BadgeCheck size={17} className="text-navy" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
