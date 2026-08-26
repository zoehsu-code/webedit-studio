import { Star } from "lucide-react";
import SectionIntro from "@/components/SectionIntro";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="container">
        <SectionIntro title="What Local Homeowners Say" align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={`${review.person}-${review.city}`} className="rounded-md border border-line bg-white p-6 shadow-soft">
              <div className="flex gap-1 text-maize" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-8 text-ink">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-extrabold text-ink">{review.person}</p>
                <p className="text-sm font-semibold text-muted">{review.city}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
