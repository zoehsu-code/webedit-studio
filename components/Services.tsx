import SectionIntro from "@/components/SectionIntro";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-warm py-16 sm:py-24 lg:py-32">
      <div className="container">
        <SectionIntro
          title="Tree Care You Can Count On"
          intro="Straightforward, professional tree services for Michigan homeowners."
        />
        <div className="mt-12 grid gap-x-10 gap-y-11 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="border-t border-line pt-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-navy text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div className="h-1 w-10 bg-maize" />
                <h3 className="mt-5 text-xl font-extrabold text-ink">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
