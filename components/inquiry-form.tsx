"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { site } from "@/site.config";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const params = useSearchParams();
  const presetService = params.get("service") ?? "";
  const presetInterest = params.get("interest") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const defaultService = useMemo(() => {
    if (presetInterest) return `Merch: ${presetInterest}`;
    const match = site.services.find((service) => service.slug === presetService);
    return match?.name ?? "";
  }, [presetInterest, presetService]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (typeof data.company === "string" && data.company.length > 0) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Could not send inquiry.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-card p-6 md:p-8" role="status">
        <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
          Inquiry received
        </p>
        <h3 className="font-display mt-3 text-3xl tracking-wide text-snow uppercase">
          We will get back during shop hours.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          For the fastest confirmed slot, continue booking on Square.
          Please give at least 48 hours if you need to reschedule.
        </p>
        <a
          href={site.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex border border-race bg-race px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-ember focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
        >
          Book on Square
        </a>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full border border-line bg-ink px-3 py-3 text-sm text-snow placeholder:text-mute/70 focus:border-race focus:outline-none";

  return (
    <form
      onSubmit={onSubmit}
      className="border border-line bg-card p-6 md:p-8"
      noValidate
    >
      <p className="text-xs font-semibold tracking-[0.22em] text-race uppercase">
        On-site inquiry
      </p>
      <h3 className="font-display mt-2 text-3xl tracking-wide text-snow uppercase">
        Tell us about the car.
      </h3>
      <p className="mt-3 text-sm text-mute">
        Estimates, questions, merch sizes, or a note before you book on Square.
      </p>
      <div className="sr-only" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-xs tracking-[0.14em] text-mute uppercase">
          Full name *
          <input
            required
            name="name"
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="text-xs tracking-[0.14em] text-mute uppercase">
          Email *
          <input
            required
            type="email"
            name="email"
            className={fieldClass}
            autoComplete="email"
          />
        </label>
        <label className="text-xs tracking-[0.14em] text-mute uppercase">
          Phone
          <input
            type="tel"
            name="phone"
            className={fieldClass}
            autoComplete="tel"
          />
        </label>
        <label className="text-xs tracking-[0.14em] text-mute uppercase">
          Year / make / model *
          <input
            required
            name="vehicle"
            className={fieldClass}
            placeholder="2015 Evo X GSR"
          />
        </label>
        <label className="text-xs tracking-[0.14em] text-mute uppercase sm:col-span-2">
          What do you need?
          <select
            name="service"
            className={cn(fieldClass, "appearance-none")}
            defaultValue={defaultService}
          >
            <option value="">Select a service or merch item</option>
            {site.services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            {site.merch.map((item) => (
              <option key={item.id} value={`Merch: ${item.name}`}>
                Merch: {item.name}
              </option>
            ))}
            <option value="General question">General question</option>
          </select>
        </label>
        <label className="text-xs tracking-[0.14em] text-mute uppercase sm:col-span-2">
          Message *
          <textarea
            required
            name="message"
            rows={5}
            className={fieldClass}
            placeholder="Goal, mods, timeline, questions."
          />
        </label>
      </div>
      {status === "error" ? (
        <p className="mt-4 text-sm text-race" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full border border-race bg-race px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-ember disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-race"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-mute">
        Required fields marked with *. We reply during shop hours. To lock a
        date, use{" "}
        <a
          href={site.booking.url}
          className="text-snow underline hover:text-race"
          target="_blank"
          rel="noopener noreferrer"
        >
          Square booking
        </a>
        .
      </p>
    </form>
  );
}
