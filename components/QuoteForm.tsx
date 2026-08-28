"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      siteSize: formData.get("siteSize"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send request.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-semibold text-brand-black"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-semibold text-brand-black"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-semibold text-brand-black"
        >
          Company / Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-brand-black"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-brand-black"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="mb-2 block text-sm font-semibold text-brand-black"
        >
          Project Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          placeholder="City, NY"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
        />
      </div>

      <div>
        <label
          htmlFor="siteSize"
          className="mb-2 block text-sm font-semibold text-brand-black"
        >
          Approximate Site Size
        </label>
        <input
          id="siteSize"
          name="siteSize"
          type="text"
          placeholder="Example: 25 acres"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-brand-black"
        >
          Tell Us About the Project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about the property, current vegetation conditions, services needed, or any other relevant information."
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-brand-green"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-green-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit Request"}
      </button>

      {status === "success" && (
        <p className="rounded-xl bg-brand-green-light px-4 py-3 text-sm font-semibold text-brand-green-dark">
          Thanks. Your request was sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}