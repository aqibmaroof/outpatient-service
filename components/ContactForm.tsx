"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  sendContactMessage,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

// Contact form shown beside the contact details on the Contact page.
export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Clear the fields after a successful send.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  const fieldClass =
    "mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-brand focus:ring-1 focus:ring-brand";
  const labelClass = "block text-sm font-medium text-ink";

  return (
    <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-100">
      <h2 className="text-xl font-bold text-ink">Send Us a Message</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        Fill out the form below and our team will get back to you as soon as
        possible.
      </p>

      <form ref={formRef} action={formAction} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              placeholder="Jane"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Doe"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="How can we help you?"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send Message"}
        </button>

        {state.status === "success" && state.message && (
          <p className="text-sm font-medium text-brand">{state.message}</p>
        )}
        {state.status === "error" && state.message && (
          <p className="text-sm font-medium text-red-600">{state.message}</p>
        )}
      </form>
    </div>
  );
}
