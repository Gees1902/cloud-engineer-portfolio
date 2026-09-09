"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "sending" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

    if (!apiUrl) {
      setStatus({
        type: "error",
        message: "The contact service is not configured.",
      });
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    setStatus({
      type: "sending",
      message: "Sending your message...",
    });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message);
      }

      form.reset();

      setStatus({
        type: "success",
        message: "Thank you! Your message was sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          minLength={3}
          maxLength={150}
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className="mt-2 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
        />
      </div>

      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "sending"}
        className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.type === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status.message && (
        <p
          role="status"
          aria-live="polite"
          className={
            status.type === "success"
              ? "text-center text-emerald-400"
              : status.type === "error"
                ? "text-center text-red-400"
                : "text-center text-slate-300"
          }
        >
          {status.message}
        </p>
      )}
    </form>
  );
}