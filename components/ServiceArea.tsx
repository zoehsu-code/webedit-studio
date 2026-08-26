import { MapPin, Phone } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SectionIntro from "@/components/SectionIntro";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/data/site";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionIntro
            title="Proudly Serving Southeast Michigan"
            intro="Ray's Tree Removal provides residential tree removal and arborist services throughout communities across Southeast Michigan."
          />
          <p className="mt-5 text-lg leading-8 text-slate">
            Not sure if you&apos;re in the service area? Give Ray a call.
          </p>
          <ButtonLink href={siteConfig.phoneHref} variant="navy" className="mt-7">
            <Phone size={18} aria-hidden="true" />
            Call {siteConfig.phone}
          </ButtonLink>
        </div>
        <div className="rounded-md border border-line bg-warm p-5 shadow-soft">
          <div className="relative min-h-[330px] overflow-hidden rounded-md bg-navy p-6 text-white">
            <div className="absolute inset-x-8 top-12 h-px bg-maize/65" />
            <div className="absolute bottom-16 left-10 right-8 h-px bg-white/20" />
            <div className="absolute left-16 top-10 h-[78%] w-px bg-white/18" />
            <div className="absolute right-20 top-8 h-[72%] w-px bg-maize/35" />
            <div className="relative grid h-full min-h-[282px] grid-cols-2 content-center gap-3 sm:grid-cols-3">
              {serviceAreas.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-3 text-sm font-bold backdrop-blur-sm"
                >
                  <MapPin size={16} className="text-maize" aria-hidden="true" />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
