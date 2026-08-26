export type QuoteSubmission = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  details: string;
  photoName?: string;
};

export async function submitQuote(payload: QuoteSubmission) {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (payload.email.toLowerCase().includes("error")) {
    throw new Error("Mock submission failed.");
  }

  return { ok: true };
}

// Future integration point:
// - Formspree: POST payload to the configured form endpoint.
// - Resend: call an API route that sends Ray the inquiry email.
// - Supabase: store submissions and optional image references in a project table.
// - Custom API route: validate server-side, upload photos, and notify Ray.
