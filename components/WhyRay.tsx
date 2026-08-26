import { BadgeCheck, Handshake, House, ShieldCheck } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";

const items = [
  {
    title: "Certified Arborist",
    body: "Professional tree knowledge and trained decision-making for every job.",
    icon: BadgeCheck,
  },
  {
    title: "Safety First",
    body: "Careful planning around homes, vehicles, structures, and surrounding trees.",
    icon: ShieldCheck,
  },
  {
    title: "Local & Independent",
    body: "Work directly with a local arborist instead of a large national company.",
    icon: House,
  },
  {
    title: "Straightforward Service",
    body: "Clear communication, honest recommendations, and free estimates.",
    icon: Handshake,
  },
];

export default function WhyRay() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container">
        <SectionIntro title="Why Homeowners Choose Ray" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-t border-line pt-6">
                <Icon className="text-navy" size={30} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-extrabold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
