"use client";

import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";

type FormState = {
  type: "idle" | "success" | "error";
  message?: string;
};

const initialState: FormState = { type: "idle" };

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setState(initialState);
    const form = event.currentTarget;

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
      _hp: String(formData.get("_hp") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      const result = raw ? (JSON.parse(raw) as { error?: string; success?: boolean }) : {};

      if (!response.ok) {
        setState({
          type: "error",
          message: result.error ?? "Unable to send your message right now.",
        });
        return;
      }

      setState({
        type: "success",
        message: "We’ve received your message and will contact you shortly.",
      });
      form.reset();
    } catch {
      setState({
        type: "error",
        message: "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
      {/* Honeypot: hidden from real users, bots fill it in */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />
      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:bg-white"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Work email</span>
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          required
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:bg-white"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Mobile number</span>
        <input
          type="tel"
          name="phone"
          placeholder="+91 90034 44702"
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:bg-white"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Interest area</span>
        <select
          name="interest"
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-teal-400 focus:bg-white"
          defaultValue="LeadBuddie"
        >
          <option>LeadBuddie</option>
          <option>Hutliv Realty</option>
          <option>General Hutliv overview</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your workflow or demo goals"
          required
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:bg-white"
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#12B8A5,#22D3EE)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-18px_rgba(18,184,165,0.65)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Request Demo"}
        </button>
        <ButtonLink href="/products" variant="secondary">
          Explore products
        </ButtonLink>
      </div>
      {state.type !== "idle" ? (
        <p
          className={`text-sm ${
            state.type === "success" ? "text-teal-700" : "text-rose-600"
          }`}
        >
          {state.message}
        </p>
      ) : null}
      <p className="text-sm text-slate-500">
        Submissions are sent to the Hutliv team over email. You can also reach us directly at{" "}
        <a className="font-medium text-slate-900" href="mailto:hello@hutliv.com">
          hello@hutliv.com
        </a>
        .
      </p>
    </form>
  );
}
