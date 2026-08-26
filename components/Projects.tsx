import Image from "next/image";
import SectionIntro from "@/components/SectionIntro";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="container">
        <SectionIntro
          title="Recent Tree Work"
          intro="A few examples of tree removal and cleanup projects around Southeast Michigan."
        />
        <div className="mt-12 grid gap-10">
          {projects.map((project) => (
            <article
              key={`${project.title}-${project.city}`}
              className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Before", project.beforeImage, project.beforeAlt],
                  ["After", project.afterImage, project.afterAlt],
                ].map(([label, src, alt]) => (
                  <figure key={label} className="overflow-hidden rounded-md bg-white shadow-soft">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="border-t border-line px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
                      {label}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-navy">
                  {project.city}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-ink">{project.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
