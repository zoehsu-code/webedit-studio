"use client";

import { AlertCircle, CheckCircle2, Upload } from "lucide-react";
import { FormEvent, useState } from "react";
import { submitQuote } from "@/lib/submitQuote";

const serviceOptions = [
  "Tree Removal",
  "Tree Trimming",
  "Storm Damage",
  "Tree Assessment",
  "Stump Removal",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      location: String(formData.get("location") || ""),
      service: String(formData.get("service") || ""),
      details: String(formData.get("details") || ""),
      photoName: (formData.get("photo") as File | null)?.name,
    };

    try {
      await submitQuote(payload);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong with this demo submission. Please call Ray instead.");
    }
  }

  return (
    <section id="contact" className="bg-warm py-16 sm:py-24 lg:py-32">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-navy">
            Free Estimate
          </p>
          <h2 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-tight text-ink">
            Get Your Free Estimate
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate">
            Tell Ray what you need help with and he&apos;ll get back to you.
          </p>
          <p className="mt-5 border-l-2 border-maize pl-4 text-sm font-semibold leading-6 text-muted">
            This V1 form uses a mock submission and does not send an email yet.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-md border border-line bg-white p-5 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" required />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
            <Field label="City / ZIP Code" name="location" autoComplete="postal-code" required />
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Service needed
              <select
                name="service"
                required
                defaultValue=""
                className="min-h-12 rounded-md border border-line bg-white px-4 py-3 text-base text-ink"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Tell us about the tree
              <textarea
                name="details"
                required
                rows={5}
                className="rounded-md border border-line px-4 py-3 text-base text-ink"
                placeholder="Where is the tree located? Is it near a house, driveway, fence, or power line?"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Optional photo upload
              <span className="flex min-h-12 items-center gap-3 rounded-md border border-dashed border-navy/35 bg-warm px-4 py-3 text-base font-semibold text-slate">
                <Upload size={20} className="text-navy" aria-hidden="true" />
                <input name="photo" type="file" accept="image/*" className="w-full text-sm" />
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-maize px-5 py-3 text-base font-extrabold text-navy transition hover:-translate-y-0.5 hover:bg-[#ffd83d] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "loading" ? "Requesting..." : "Request My Free Estimate"}
          </button>

          {status === "success" ? (
            <p className="mt-5 flex items-start gap-2 rounded-md border border-navy/20 bg-warm p-4 font-semibold text-navy">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
              Demo request received. Connect the form integration before launch so Ray gets real inquiries.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-4 font-semibold text-red-800">
              <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
              {error}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="min-h-12 rounded-md border border-line px-4 py-3 text-base text-ink"
      />
    </label>
  );
}
