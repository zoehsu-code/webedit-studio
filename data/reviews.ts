export type Review = {
  quote: string;
  person: string;
  city: string;
};

// PLACEHOLDER REVIEWS — MUST BE REPLACED WITH REAL CUSTOMER REVIEWS BEFORE LAUNCH.
// These are sample quotes only and should not be represented as verified customer feedback.
export const reviews: Review[] = [
  {
    quote:
      "Ray was professional, responsive, and made the whole process easy. The tree was close to our house and everything was handled safely.",
    person: "Sarah M.",
    city: "Plymouth, MI",
  },
  {
    quote:
      "Great communication from start to finish. The yard was completely cleaned up afterward.",
    person: "Michael T.",
    city: "Canton, MI",
  },
  {
    quote:
      "Fast estimate, fair recommendation, and excellent work. I'd absolutely call Ray again.",
    person: "Emily R.",
    city: "Northville, MI",
  },
];
